import { useEffect, useState } from "react";
import { ICategoryService } from "../../interfaces/categoryService.interface";
import { Category } from "../../types/category";

const useFetchCategories = (categoryService: ICategoryService) => {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true)

                const categoriesData = await categoryService.fetchCategories();
                setCategories(categoriesData)

                setIsLoading(false)
            } catch (e) {
                setIsLoading(false);
                setError("Erro ao carregar categorias!");
            }
        }

        fetchCategories()
    }, [categoryService])

    return {categories, isLoading, error}
}

export default useFetchCategories;
